"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamworkApiNodeApi = void 0;
class TeamworkApiNodeApi {
    constructor() {
        this.name = 'teamwork.com_api';
        this.displayName = 'Teamwork.com Api Node API';
        this.documentationUrl = 'https://github.com/pedrouzcategui/n8n_teamwork_node#credentials';
        this.properties = [
            {
                displayName: 'Subdomain',
                name: 'subdomain',
                type: 'string',
                description: 'Your Teamwork subdomain (e.g., if your URL is https://example.teamwork.com, your subdomain is "example")',
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
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                description: 'Your Teamwork API Key (if you prefer using API Key over username)',
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '=IF($credentials.apiKey != "", "Basic " + BINARY_TO_BASE64($credentials.apiKey + ":x"), "Basic " + BINARY_TO_BASE64($credentials.username + ":" + $credentials.password))',
                },
            },
        };
        this.test = {
            request: {
                baseURL: `https://{{$credentials.subdomain}}.teamwork.com/projects/api/v3`,
                url: '/v1/user',
            },
        };
    }
}
exports.TeamworkApiNodeApi = TeamworkApiNodeApi;
//# sourceMappingURL=TeamworkApiNodeApi.credentials.js.map