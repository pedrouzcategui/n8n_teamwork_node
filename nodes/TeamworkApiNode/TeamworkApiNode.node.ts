import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { tasksDescription } from './resources/tasks';

export class TeamworkApiNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Teamwork.com API (For Chase & Team @ Focus Digital!)',
		name: 'teamwork_api_node',
		// TODO: include dark mode icon
		icon: 'file:teamworkApiNode.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Non-Official Teamwork.com API Node for n8n',
		defaults: {
			name: 'Teamwork.com',
			color: '#0b0836',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'teamwork.com_api', required: true }],
		requestDefaults: {
			baseURL: '=https://{{$credentials.subdomain}}.teamwork.com/projects/api/v3',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Tasks',
						value: 'tasks',
					},
				],
				default: 'tasks',
			},
			// Tasks Resource + Operations
			...tasksDescription,
		],
	};
}
