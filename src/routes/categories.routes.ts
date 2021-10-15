import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/model/repositories/CategoriesRepository";
import { CreateCategoryUseCase} from "../modules/cars/model/useCases/createCategory/CreateCategoryUseCase";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) =>{
  const { name, description } = request.body;  

  const createCategoryService = new CreateCategoryUseCase(categoriesRepository);

  createCategoryService.execute({name, description });
  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();

    return response.json(all);
});

export { categoriesRoutes };