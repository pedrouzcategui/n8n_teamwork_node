import { INodeProperties } from 'n8n-workflow';

const getTaskShowOptions = {
	resource: ['tasks'],
	operation: ['get'],
};

export const taskGetDescription: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'string',
		default: '',
		required: true,
		description: 'ID of the task to retrieve',
		displayOptions: {
			show: getTaskShowOptions,
		},
	},
];
