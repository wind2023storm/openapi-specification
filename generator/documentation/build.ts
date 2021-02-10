/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
	root,
	paragraph,
	text,
	strong,
	inlineCode,
	html as htmlNode,
	table,
	tableRow,
	tableCell,
	link,
} from 'mdast-builder';
import { Parent } from 'unist';
import { OpenAPIV3 } from 'openapi-types';
import { isRef } from './helpers';
import fromMarkdown from 'mdast-util-from-markdown';

export interface PropertyRow {
	field: Parent;
	type: Parent;
	description?: Parent;
}

export const build = (
	schema: OpenAPIV3.ReferenceObject | OpenAPIV3.ArraySchemaObject | OpenAPIV3.NonArraySchemaObject,
	key: string
): Parent => {
	if (isRef(schema)) {
		throw 'cannot handle ref here';
	}

	const nodes: any = [];

	nodes.push(
		htmlNode(`<h3 class="schema-object" id="${key}">${schema.title == undefined ? key : schema.title}</h3>`)
	);
	if (schema.description) {
		nodes.push(paragraph(fromMarkdown(schema.description)));
	}
	nodes.push(paragraph([text(`type: `), inlineCode(schema.type!)]));

	// if an object, build a table of fields
	if (schema.type === 'object') {
		const rows: any = [];

		// header row
		rows.push(
			tableRow([
				tableCell(text('Field')),
				tableCell(text('Required')),
				tableCell(text('Type')),
				tableCell(text('Description')),
			])
		);

		// all fields
		Object.keys(schema.properties!)
			.sort((a: string, b: string) => {
				if (schema.required) {
					if (schema.required.indexOf(a) !== -1 && schema.required.indexOf(b) !== -1 ) {
						return a < b ? -1 : 1;
					} else if (schema.required.indexOf(a) !== -1 ) {
						return -1;
					} else if (schema.required.indexOf(b) !== -1 ) {
						return 1;
					}
				}
				return a < b ? -1 : 1;
			})
			.forEach((key) => {
				const required = Boolean(schema.required && schema.required.indexOf(key) !== -1);

				rows.push(propertyToRow(key, schema.properties![key], required));
			});

		nodes.push(table(['left'], rows));
	}
	return root(nodes);
};

const propertyToRow = (
	key: string,
	property: OpenAPIV3.ReferenceObject | OpenAPIV3.ArraySchemaObject | OpenAPIV3.NonArraySchemaObject,
	required: boolean
): Parent => {
	const row: any[] = [];
	row.push(tableCell(inlineCode(key)));

	// bold if required
	if (required) {
		row.push(tableCell([strong(text('required'))]));
	} else {
		row.push(tableCell([text('optional')]));
	}

	if (isRef(property)) {
		const name = property.$ref.split('/').pop()!;
		const refLink = link(`#${name}`, name, [text(name)]);
		row.push(tableCell(refLink));
		row.push(tableCell(refPropertyDesciption(refLink, property['description'])));
	} else {
		if (property.type === 'array') {
			const name = (property.items as OpenAPIV3.ReferenceObject).$ref.split('/').pop()!;
			const refLink = link(`#${name}`, name, [text(name)]);
			row.push(tableCell([text('Array<'), refLink, text('>')]));
			row.push(tableCell(refPropertyDesciption(refLink, property.description)));
		} else {
			row.push(tableCell(text(property.type!)));
			row.push(tableCell(text(property.description || '')));
		}
	}

	return tableRow(row);
};

const refPropertyDesciption = (refLink: any, description?: string) => {
	if (description) {
		return [text(description), text(' See '), refLink, text(' for more information.')];
	}

	return [text('See '), refLink, text(' for more information.')];
};
