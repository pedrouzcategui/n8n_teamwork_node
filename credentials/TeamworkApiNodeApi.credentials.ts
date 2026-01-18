import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class TeamworkApiNodeApi implements ICredentialType {
	name = 'teamwork.com_api';

	displayName = 'Teamwork.com Api Node API';

	// Link to your community node's README
	documentationUrl = 'https://github.com/pedrouzcategui/n8n_teamwork_node#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Subdomain',
			name: 'subdomain',
			type: 'string',
			description:
				'Your Teamwork subdomain (e.g., if your URL is https://example.teamwork.com, your subdomain is "example")',
			default: '',
		},
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
			baseURL: `https://{{$credentials.subdomain}}.teamwork.com/projects/api/v3`,
			url: '/v1/user',
		},
	};
}
