'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        let wxj = ctx.request.query.abc;
        const tencentcloud = require("tencentcloud-sdk-nodejs");

        const TbpClient = tencentcloud.tbp.v20190627.Client;

        const clientConfig = {
            credential: {
                secretId: "AKIDFJ7euud4E7kOkpdCUWHlyua08zZtwiDU",
                secretKey: "1lEQLyKPDl10i9Ji39zav1tVrzrUrzrT",
            },
            region: "",
            profile: {
                httpProfile: {
                    endpoint: "tbp.tencentcloudapi.com",
                },
            },
        };

        const client = new TbpClient(clientConfig);
        const params = {
            "BotId": "7108bdf5-6f5a-42d6-aedb-d3c378b2f139",
            "BotEnv": "dev",
            "TerminalId": "18081234919",
            "InputText": wxj
        };
        await client.TextProcess(params).then(
            (data) => {
                ctx.body = data
            },
            (err) => {
                ctx.body = err
            }
        );
    }

}

module.exports = HomeController;