import { INodeProperties } from 'n8n-workflow';

const showOnlyForPeople = {
	resource: ['people'],
};

export const peopleDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForPeople,
		},
		options: [
			{
				name: 'Get Logged In User Information',
				value: 'getLoggedUserInfo',
				action: 'Get logged user information',
				description: 'Get information about the logged in user',
				routing: {
					request: {
						method: 'GET',
						url: '/me.json',
					},
				},
			},
		],
		default: 'getLoggedUserInfo',
	},
];
