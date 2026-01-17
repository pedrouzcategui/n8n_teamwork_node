"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamworkApiNode = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const user_1 = require("./resources/user");
const company_1 = require("./resources/company");
class TeamworkApiNode {
    constructor() {
        this.description = {
            displayName: 'Teamwork.com Api Node',
            name: 'teamworkApiNode',
            icon: { light: 'file:teamworkApiNode.svg', dark: 'file:teamworkApiNode.dark.svg' },
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the Teamwork Api Node API',
            defaults: {
                name: 'Teamwork Api Node',
            },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [{ name: 'teamworkApiNodeApi', required: true }],
            requestDefaults: {
                baseURL: 'https://example.com.teamwork.com/projects/api/v3',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'User',
                            value: 'user',
                        },
                        {
                            name: 'Company',
                            value: 'company',
                        },
                    ],
                    default: 'user',
                },
                ...user_1.userDescription,
                ...company_1.companyDescription,
            ],
        };
    }
}
exports.TeamworkApiNode = TeamworkApiNode;
//# sourceMappingURL=TeamworkApiNode.node.js.map