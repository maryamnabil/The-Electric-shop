import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  constructor() { }
  option:any;




  color(){
    
    this.option=(<HTMLInputElement>document.getElementById("list")).value;
      if (this.option == 'Television'){
          document.getElementById('Television').style.display = 'block';
          document.getElementById('Mobile').style.display = 'none';
          document.getElementById('Iron').style.display = 'none';
          document.getElementById('Heater').style.display = 'none';
          document.getElementById('Boiler').style.display = 'none';
      document.getElementById('Microwave').style.display = 'none';
      } 
      else if(this.option=="Mobile"){
          document.getElementById('Television').style.display = 'none';
          document.getElementById('Mobile').style.display = 'block';
          document.getElementById('Iron').style.display = 'none';
          document.getElementById('Heater').style.display = 'none';
          document.getElementById('Boiler').style.display = 'none';
      document.getElementById('Microwave').style.display = 'none';
      }
  
      else if(this.option=="Iron"){
          document.getElementById('Television').style.display = 'none';
          document.getElementById('Mobile').style.display = 'none';
          document.getElementById('Iron').style.display = 'block';
          document.getElementById('Heater').style.display = 'none';
          document.getElementById('Boiler').style.display = 'none';
      document.getElementById('Microwave').style.display = 'none';
      }  
  
      else if(this.option=="Heater"){
          document.getElementById('Television').style.display = 'none';
          document.getElementById('Mobile').style.display = 'none';
          document.getElementById('Iron').style.display = 'none';
          document.getElementById('Heater').style.display = 'block';
          document.getElementById('Boiler').style.display = 'none';
      document.getElementById('Microwave').style.display = 'none';
      }  
  
      else if(this.option=="Boiler"){
          document.getElementById('Television').style.display = 'none';
          document.getElementById('Mobile').style.display = 'none';
          document.getElementById('Iron').style.display = 'none';
          document.getElementById('Heater').style.display = 'none';
          document.getElementById('Boiler').style.display = 'block';
      document.getElementById('Microwave').style.display = 'none';
      }  
  
      else if(this.option=="Microwave"){
          document.getElementById('Television').style.display = 'none';
          document.getElementById('Mobile').style.display = 'none';
          document.getElementById('Iron').style.display = 'none';
          document.getElementById('Heater').style.display = 'none';
          document.getElementById('Boiler').style.display = 'none';
      document.getElementById('Microwave').style.display = 'block';
      }   
  
  }
  
  items: { title: string, desciption: string,pic:string }[] = [
      { "title": "Televisions Section","desciption": "Explore All kind of Televisions needed to make your home more Comfortable !","pic":"tv" },
      { "title": "Mobiles Section", "desciption": "Explore All kind of Mobiles needed to make your life more Comfortable and easier to reach your network !","pic" :"mobile"},
      { "title": "Electric Irons Section", "desciption": "Explore All kind of Electric Irons needed to make your cloths appear more beautiful in an easier way !","pic":"iron" },
      { "title": "Microwaves Section", "desciption": "Explore All kind of Microwaves needed to make your food more tasty in less time and effort !","pic":"microwave" },
      { "title": "Electric Heaters Section", "desciption": "Explore All kind of Electric Heaters needed to make your bath more Comfortable and relaxed !","pic":"electric-heater" },
      { "title": "Water Boilers Section", "desciption": "Explore All kind of Electric water Boiler needed to make your drinks fast and in a good quality !" ,"pic":"boiler"},
  
  ];
  ngOnInit() {
  }

}
