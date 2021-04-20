import { instance } from "./axios";
import { urls } from "./urls";
import { IBook } from "interfaces/IBook";
import { ILibrary } from "interfaces/ILibrary";

export default class API {
  static async registerUser(body: { name: string; lastName: string; email: string; password: string }) {
    const res = await instance.post(urls.urlRegister, body);
    localStorage.setItem("token", res.data.token);
    return console.log(res.data);
  }

  static async registerLibrary(formData: FormData) {
    const res = await instance.post(urls.urlRegisterLibrary, formData);
    localStorage.setItem("token", res.data.token);
    console.log(res.data.token);
    return console.log(res);
  }

  static async loginUser(body: { email: string; password: string }) {
    //const res = await instance.post(urls.urlLogin, body, {withCredentials: true})
    const res = await instance.post(urls.urlLogin, body);
    localStorage.setItem("token", res.data.token);
    console.log(res.data.token);
    return console.log(res);
  }

  static async updateUser(body: {
    email: string;
    name: string;
    lastName: string;
    address: { provincia: string; ciudad: string; codigoPostal: string; pais: string };
  }) {
    const res = await instance.put(urls.urlUpdateUser, body);
    return console.log(res);
  }

  static async updateUserImage(formData: FormData) {
    const res = await instance.put(urls.urlUpdateUserImage, formData);
    return console.log(res);
  }

  static async addUserShippingAddress(body: {
    name: string;
    addressType: string;
    address: string;
    provincia: string;
    ciudad: string;
    codigoPostal: string;
    pais: string;
  }) {
    const res = await instance.post(urls.urlAddUserShippingAddress, body);
    return console.log(res);
  }

  static async updateUserShippingAddress(body: {
    name: string;
    addressType: string;
    address: string;
    provincia: string;
    ciudad: string;
    codigoPostal: string;
    pais: string;
  }) {
    const res = await instance.post(urls.urlUpdateUserShippingAddress, body);
    return console.log(res);
  }

  static async getUserShippingAddress(id: string) {
    const res = await instance.get(`${urls.urlGetUserShippingAddress}/${id}`);
    return res;
  }

  static async profileUser() {
    const res = await instance.get(urls.urlProfile);
    return res;
  }

  static async addBook(formData: FormData) {
    const res = await instance.post(urls.urlFormBook, formData);
    return console.log(res.data);
  }

  static async getBook(id: string) {
    return await instance.get<IBook>(`${urls.urlBooks}/${id}`);
  }

  static async getBooks() {
    return await instance.get<IBook[]>(urls.urlBooks);
  }

  static async getLibrary(id: string) {
    return await instance.get<ILibrary>(`${urls.urlLibraries}/${id}`);
  }

  static async getLibraries() {
    return await instance.get<ILibrary[]>(urls.urlLibraries);
  }
}
