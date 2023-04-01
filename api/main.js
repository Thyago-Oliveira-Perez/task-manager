"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const main_module_1 = require("./main.module");
require('dotenv').config();
async function bootstrap() {
    const logger = new common_1.Logger();
    const app = await core_1.NestFactory.create(main_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Task Manager API')
        .setDescription('API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(process.env.PORT);
    logger.log(`Application running on port: http://localhost:${process.env.PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map