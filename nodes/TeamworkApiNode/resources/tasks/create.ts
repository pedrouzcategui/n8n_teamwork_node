import { INodeProperties } from 'n8n-workflow';

const showOnlyForTasksCreate = {
	resource: ['tasks'],
	operation: ['create'],
};

export const tasksCreateDescription: INodeProperties[] = [
	{
		displayName: 'Task List ID',
		name: 'taskListId',
		type: 'string',
		default: '',
		required: true,
		description: 'ID of the task list to create the task in',
		displayOptions: {
			show: showOnlyForTasksCreate,
		},
	},
	// Body Parameters
	{
		displayName: 'Task Object',
		name: 'taskObject',
		type: 'collection',
		placeholder: 'Add Task Object Property',
		default: {},
		displayOptions: {
			show: showOnlyForTasksCreate,
		},
		options: [
			{
				displayName: 'Task Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				description: 'The name of the task to create',
			},
			{
				displayName: 'Task Description',
				name: 'description',
				type: 'string',
				default: '',
				required: false,
				description: 'The description of the task to create',
			},
			{
				displayName: 'Task Status',
				name: 'status',
				type: 'string',
				default: '',
				required: true,
				description: 'The status of the task to create',
			},
		],
	},
];
