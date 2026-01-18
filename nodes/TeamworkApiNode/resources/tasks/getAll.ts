import { INodeProperties } from 'n8n-workflow';

const showOnlyForTasksGetMany = {
	resource: ['tasks'],
	operation: ['getAll'],
};

export const tasksGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForTasksGetMany,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'query',
				property: 'pageSize',
			},
			output: {
				maxResults: '={{$value}}',
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForTasksGetMany,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		routing: {
			send: {
				paginate: '={{ $value }}',
			},
			operations: {
				pagination: {
					type: 'offset',
					properties: {
						offsetParameter: 'page',
						limitParameter: 'pageSize',
						pageSize: 50,
						type: 'query',
					},
				},
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: showOnlyForTasksGetMany,
		},
		options: [
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				typeOptions: {
					minValue: 1,
				},
				description: 'Page number (only used when Return All is disabled)',
				routing: {
					send: {
						type: 'query',
						property: 'page',
					},
				},
			},
			{
				displayName: 'Search Term',
				name: 'searchTerm',
				type: 'string',
				default: '',
				description: 'Filter by search term',
				routing: {
					send: {
						type: 'query',
						property: 'searchTerm',
					},
				},
			},
			{
				displayName: 'Task Filter',
				name: 'taskFilter',
				type: 'options',
				default: 'all',
				options: [
					{ name: 'All', value: 'all' },
					{ name: 'Anytime', value: 'anytime' },
					{ name: 'Completed', value: 'completed' },
					{ name: 'Overdue', value: 'overdue' },
					{ name: 'Today', value: 'today' },
					{ name: 'Tomorrow', value: 'tomorrow' },
					{ name: 'This Week', value: 'thisweek' },
					{ name: 'Within 7 Days', value: 'within7' },
					{ name: 'No Due Date', value: 'noduedate' },
					{ name: 'No Start Date', value: 'nostartdate' },
				],
				description: "Filter by one of Teamwork's predefined task filters",
				routing: {
					send: {
						type: 'query',
						property: 'taskFilter',
					},
				},
			},
			{
				displayName: 'Project IDs',
				name: 'projectIds',
				type: 'string',
				default: '',
				description: 'Filter by project IDs (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'projectIds',
					},
				},
			},
			{
				displayName: 'Task IDs',
				name: 'ids',
				type: 'string',
				default: '',
				description: 'Filter by task IDs (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'ids',
					},
				},
			},
			{
				displayName: 'Due After',
				name: 'dueAfter',
				type: 'dateTime',
				default: '',
				description: 'Filter after a due date',
				routing: {
					send: {
						type: 'query',
						property: 'dueAfter',
					},
				},
			},
			{
				displayName: 'Due Before',
				name: 'dueBefore',
				type: 'dateTime',
				default: '',
				description: 'Filter before a due date',
				routing: {
					send: {
						type: 'query',
						property: 'dueBefore',
					},
				},
			},
			{
				displayName: 'Updated After',
				name: 'updatedAfter',
				type: 'dateTime',
				default: '',
				description: 'Filter by updated after date',
				routing: {
					send: {
						type: 'query',
						property: 'updatedAfter',
					},
				},
			},
			{
				displayName: 'Updated Before',
				name: 'updatedBefore',
				type: 'dateTime',
				default: '',
				description: 'Filter by updated before date',
				routing: {
					send: {
						type: 'query',
						property: 'updatedBefore',
					},
				},
			},
			{
				displayName: 'Include Completed Tasks',
				name: 'includeCompletedTasks',
				type: 'boolean',
				default: false,
				description: 'Whether to include completed tasks',
				routing: {
					send: {
						type: 'query',
						property: 'includeCompletedTasks',
					},
				},
			},
			{
				displayName: 'Show Deleted',
				name: 'showDeleted',
				type: 'boolean',
				default: false,
				description: 'Whether to include deleted items',
				routing: {
					send: {
						type: 'query',
						property: 'showDeleted',
					},
				},
			},
			{
				displayName: 'Include Custom Fields',
				name: 'includeCustomFields',
				type: 'boolean',
				default: false,
				description: 'Whether to include custom fields',
				routing: {
					send: {
						type: 'query',
						property: 'includeCustomFields',
					},
				},
			},
			{
				displayName: 'Order By',
				name: 'orderBy',
				type: 'options',
				default: 'duedate',
				options: [
					{ name: 'Due Date', value: 'duedate' },
					{ name: 'Start Date', value: 'startdate' },
					{ name: 'Created At', value: 'createdat' },
					{ name: 'Updated At', value: 'updatedat' },
					{ name: 'Priority', value: 'priority' },
					{ name: 'Task Name', value: 'taskname' },
				],
				description: 'Order tasks by a field',
				routing: {
					send: {
						type: 'query',
						property: 'orderBy',
					},
				},
			},
			{
				displayName: 'Order Mode',
				name: 'orderMode',
				type: 'options',
				default: 'asc',
				options: [
					{ name: 'Ascending', value: 'asc' },
					{ name: 'Descending', value: 'desc' },
				],
				description: 'Order direction',
				routing: {
					send: {
						type: 'query',
						property: 'orderMode',
					},
				},
			},
		],
	},
];
