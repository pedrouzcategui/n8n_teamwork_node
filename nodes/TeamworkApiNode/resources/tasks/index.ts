import type { INodeProperties } from 'n8n-workflow';
import { tasksGetManyDescription } from './getAll';

const showOnlyForTasks = {
	resource: ['tasks'],
};

export const tasksDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTasks,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get tasks',
				description: 'Get tasks (supports filtering via query parameters)',
				routing: {
					request: {
						method: 'GET',
						url: '/tasks.json',
					},
				},
			},
		],
		default: 'getAll',
	},
	...tasksGetManyDescription,
];
