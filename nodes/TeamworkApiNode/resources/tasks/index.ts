import type { INodeProperties } from 'n8n-workflow';
import { tasksGetManyDescription } from './getAll';
import { taskGetDescription } from './get';
import { tasksCreateDescription } from './create';

const showOnlyForTasks = {
	resource: ['tasks'],
};

const tasksOperations: INodeProperties = {
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
		{
			name: 'Get',
			value: 'get',
			action: 'Get a task',
			description: 'Get a task',
			routing: {
				request: {
					method: 'GET',
					// Uses the "taskId" parameter below
					url: '={{"/tasks/" + $parameter.taskId + ".json"}}',
				},
			},
		},
		{
			name: 'Create',
			value: 'create',
			action: 'Create a task',
			description: 'Create a new task',
			routing: {
				request: {
					method: 'POST',
					url: '={{"/tasklists/" + $parameter.taskListId + "/tasks.json"}}',
				},
			},
		},
	],
	default: 'get',
};

const tasksFields: INodeProperties[] = [
	// Get All Tasks
	...tasksGetManyDescription,
	// Get Task By ID
	...taskGetDescription,
	// Create Task
	...tasksCreateDescription,
];

export const tasksDescription: INodeProperties[] = [tasksOperations, ...tasksFields];
