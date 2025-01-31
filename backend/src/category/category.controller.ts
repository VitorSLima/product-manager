import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() data: CreateCategoryDto) {
    return this.categoryService.createCategory(data);
  }

  @Get()
  findAll() {
    return this.categoryService.findAllCategories();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findCategoryById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateCategoryDto) {
    return this.categoryService.updateCategory(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.removeCategory(id);
  }
}
