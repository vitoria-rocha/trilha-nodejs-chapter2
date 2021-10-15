import { ISpecificationRepository } from "../modules/cars/model/repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository){

  }
  
  execute({ name, description }: IRequest): void{
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);

   if (specificationAlreadyExists){
      throw new Error("specification already exists");
    }
    this.specificationsRepository.create({
      name,
      description,
    });
  
  }
}

export { CreateSpecificationService };