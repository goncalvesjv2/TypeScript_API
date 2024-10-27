import { Request, Response } from "express";
import { AuthenticateUserService } from "../../service/autentication/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    console.log("Tentativa de login")
    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({
      email,
      password,
    });
    
    return response.json(token);
  }
  
}

export { AuthenticateUserController };