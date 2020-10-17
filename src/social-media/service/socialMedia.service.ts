
// import { OTUser } from '../models/graphql/user.output';
import { map } from 'rxjs/operators';
import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Repository } from "typeorm";
import { SocialMediaDto } from "../models/socialmedia.dto";
import { SocialMedia } from "../models/socialmedia.entity";
var FormData = require('form-data');
@Injectable()
export class SocialMediaService {
  constructor(
    @InjectRepository(SocialMedia)
    private readonly socialRepository: Repository<SocialMedia>,private http: HttpService
  ) {}
  
  
  //read user...

 
  async postOnFacebook(file,social: SocialMediaDto ){ 
    let form = new FormData();
    // form.append("access_token",JSON.parse( JSON.stringify(social.facebookAccessToken)))
    form.append("message",JSON.stringify(social.message))    
    form.append("file","https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg")
    // form.append("file",JSON.stringify(file[0]))
    // form.append('file',file[0])
     

  
      // console.log(file[0].originalname)
    return  this.http.post(`https://graph.facebook.com/bffbvcbvcbcvbcvbc/photos?access_token=${social.facebookAccessToken}`,form ).toPromise().then((result)=>{
      console.log(result.data)  
    }).catch((err)=>{
      console.log(err.response.data.error)
      console.log(err.response.status)
    })
 

  
  }

}
