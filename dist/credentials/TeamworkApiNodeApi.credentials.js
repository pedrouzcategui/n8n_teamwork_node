"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamworkApiNodeApi = void 0;
class TeamworkApiNodeApi {
    constructor() {
        this.name = 'teamworkApiNodeApi';
        this.displayName = 'Teamwork Api Node API';
        this.documentationUrl = 'https://github.com/org/-teamwork-api-node?tab=readme-ov-file#credentials';
        this.properties = [
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
        this.authenticate = {
            type: 'generic',
            properties: {
                auth: {
                    username: '={{$credentials.username}}',
                    password: '={{$credentials.password}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://example.com.teamwork.com/projects/api/v3',
                url: '/v1/user',
            },
        };
    }
}
exports.TeamworkApiNodeApi = TeamworkApiNodeApi;
//# sourceMappingURL=TeamworkApiNodeApi.credentials.js.map