export class DescriptionDrone {
    constructor (imgDrones:string[], droneName:string, productDescription:string, attr: { [key: string]: string }, companyProfile?:string,companyProfileName?:string, companyProfileText?:string) {
        this.ImgDrones = imgDrones,
        this.DroneName = droneName,
        this.ProductDescription = productDescription,
        this.CompanyProfile = companyProfile,
        this.CompanyProfileName = companyProfileName ,
        this.CompanyProfileText = companyProfileText,
        this.Attributes = attr;
    }
    ImgDrones:string[];
    DroneName:string = '';
    ProductDescription?:string = '';
    CompanyProfile?:string = '';
    CompanyProfileName?:string = '';
    CompanyProfileText?:string = '';
    Attributes?: { [key: string]: string };
  }

  
  