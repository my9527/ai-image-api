import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('api/upload')
export class ApiController {
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
  ) {
    // Handle the uploaded file
    console.log(file);
    console.log(body);
    return {
      message: 'File uploaded successfully',
      code: 200,
      data: null,
    };
  }

  @Get('/file')
  async getFile() {
    return 'Hello 111';
  }
}
