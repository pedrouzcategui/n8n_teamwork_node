"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamworkApiNode = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const tasks_1 = require("./resources/tasks");
class TeamworkApiNode {
    constructor() {
        this.description = {
            displayName: 'Teamwork.com API (For Chase & Team @ Focus Digital!)',
            name: 'teamwork_api_node',
            icon: 'file:teamworkApiNode.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Non-Official Teamwork.com API Node for n8n',
            defaults: {
                name: 'Teamwork.com',
                color: '#0b0836',
            },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [{ name: 'teamwork.com_api', required: true }],
            requestDefaults: {
                baseURL: '=https://{{$credentials.subdomain}}.teamwork.com/projects/api/v3',
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
                            name: 'Tasks',
                            value: 'tasks',
                        },
                    ],
                    default: 'tasks',
                },
                ...tasks_1.tasksDescription,
            ],
        };
    }
}
exports.TeamworkApiNode = TeamworkApiNode;
//# sourceMappingURL=TeamworkApiNode.node.js.map