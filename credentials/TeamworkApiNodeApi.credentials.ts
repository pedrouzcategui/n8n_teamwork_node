import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class TeamworkApiNodeApi implements ICredentialType {
	name = 'teamworkApiNodeApi';

	displayName = 'Teamwork Api Node API';

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-teamwork-api-node?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			auth: {
				username: '={{$credentials.username}}',
				password: '={{$credentials.password}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://example.com.teamwork.com/projects/api/v3',
			url: '/v1/user',
		},
	};
}
