const requestpath = "https://localhost:3000/create";
function checkContact(n){
    n = n.toString();
    if(n.length<10){
        return false;
    }
    if(n[0]!='9' || !(n[1]=='8'||n[1]=='7'||n[1]=='6')){
        return false;
    }
    return true;
}
let data={};
let align = document.querySelector('.align');
let bttn = document.querySelector('button.navbar-toggler');
let state = 0;
document.addEventListener('DOMContentLoaded', (event) => {
    if (navigator.userAgentData.mobile) {
        align.style.display = "none";
    } else if (window.innerWidth < 960) {
        align.style.display = "none";
    }
})
window.addEventListener('resize', (event) => {
    if (window.innerWidth < 960) {
        align.style.animationName = "alignAnimation";
        align.addEventListener('animationend', () => {
            align.style.display = "none";
            align.animationName = "";
        })
    } else if (window.innerWidth > 960) {
        align.style.display = "block";
        align.style.animationName = "alignAnimationR";
        align.addEventListener('animationend', (event) => {
            align.animationName = "";
            align.style.display = "block";
        })
    }
})
bttn.addEventListener('click', (event) => {
    if (state % 2 == 0) {
        console.log(bttn.children[0].classList);
    }
    if ((align.style.display == "" || align.style.display == 'block')) {
        align.style.animationName = "alignAnimation";
        align.addEventListener('animationend', () => {
            align.style.display = "none";
            align.animationName = "";
        })
    } else if (align.style.display == "none") {
        align.style.display = "block";
        align.style.animationName = "alignAnimationR";
        align.addEventListener('animationend', (event) => {
            align.animationName = "";
            align.style.display = "block";
        })
    }
})
let formState = 0
let formPage = document.querySelector('div.formPage');
let previous = document.querySelector('#previous');
let next = document.querySelector('#next');
previous.addEventListener('click', (event) => {
    if (formState > 0) {
        formPage.style.animationName =`formAnimationR${formState-1}`
        --formState;
        formPage.style.transform=`translate(-${(formState)*25}%,0)`
        formPage.addEventListener('animationend',(event)=>{
            formPage.style.animationName='';
            align?.children[0]?.children[formState+1]?.children[0]?.classList?.remove('text-primary')
            align?.children[0]?.children[formState+1]?.children[0]?.classList?.add('text-secondary')
            align?.children[0]?.children[formState]?.children[0]?.classList?.remove('text-secondary')
            align?.children[0]?.children[formState]?.children[0]?.classList?.add('text-primary')
        })
    }
})
next.addEventListener('click', (event) => {
    if (formState < 3) {
        formPage.style.animationName =`formAnimation${formState}`
        ++formState;
        formPage.style.transform=`translate(-${formState*25}%,0)`
        formPage.addEventListener('animationend',(event)=>{
            formPage.style.animationName='';
            align.children[0].children[formState-1].children[0].classList.remove('text-primary')
            align.children[0].children[formState-1].children[0].classList.add('text-secondary')
            align.children[0].children[formState].children[0].classList.remove('text-secondary')
            align.children[0].children[formState-1].children[0].classList.add('text-primary')
        })
    }
})

let perProvince = document.querySelector('#Per-province');
let perDistrict  =document.querySelector('#Per-district');
perProvince.addEventListener('change',(event)=>{
    let value= parseInt(event.target.value);
    switch(value){
        case  1:{
           perDistrict.innerHTML ='<option value="">District</option><option value=Bhojpur>Bhojpur</option><option value=Dhankuta>Dhankuta</option><option value=Ilam>Ilam</option><option value=Jhapa>Jhapa</option><option value=Khotang>Khotang</option><option value=Morang>Morang</option><option value=Okhaldhunga>Okhaldhunga</option><option value=Panchthar>Panchthar</option><option value=Sankhuwasabha>Sankhuwasabha</option><option value=Solukhumbu>Solukhumbu</option><option value=Sunsari>Sunsari</option><option value=Taplejung>Taplejung</option><option value=Terhathum>Terhathum</option><option value=Udayapur>Udayapur</option>'
           break;
        }
        case 2:{
            perDistrict.innerHTML='<option value="">District</option><option value=Bara>Bara</option><option value=Dhanusa>Dhanusa</option><option value=Mahottari>Mahottari</option><option value=Parsa>Parsa</option><option value=Rautahat>Rautahat</option><option value=Saptari>Saptari</option><option value=Sarlahi>Sarlahi</option><option value=Siraha>Siraha</option>'
            break;
        }
        case 3 :{
            perDistrict.innerHTML= '<option value="">District</option><option value=Bhaktapur>Bhaktapur</option><option value=Chitwan>Chitwan</option><option value=Dhading>Dhading</option><option value=Dolakha>Dolakha</option><option value=Kathmandu>Kathmandu</option><option value=Kavrepalanchok>Kavrepalanchok</option><option value=Lalitpur>Lalitpur</option><option value=Makawanpur>Makawanpur</option><option value=Nuwakot>Nuwakot</option><option value=Ramechhap>Ramechhap</option><option value=Rasuwa>Rasuwa</option><option value=Sindhuli>Sindhuli</option><option value=Sindhupalchok>Sindhupalchok</option>'
            break;
        }
        case 4:{
            perDistrict.innerHTML='<option value="">District</option><option value=Baglung>Baglung</option><option value=Gorkha>Gorkha</option><option value=Kaski>Kaski</option><option value=Lamjung>Lamjung</option><option value=Manang>Manang</option><option value=Mustang>Mustang</option><option value=Myagdi>Myagdi</option><option value=Nawalparasi>Nawalparasi</option><option value=Parbat>Parbat</option><option value=Syangja>Syangja</option><option value=Tanahu>Tanahu</option>'
            break;
        }
        case 5:{
            perDistrict.innerHTML = '<option value="">District</option><option value=Arghakhanchi>Arghakhanchi</option><option value=Banke>Banke</option><option value=Bardiya>Bardiya</option><option value=Dang>Dang</option><option value=Gulmi>Gulmi</option><option value=Kapilvastu>Kapilvastu</option><option value=Nawalparasi>Nawalparasi</option><option value=Palpa>Palpa</option><option value=Pyuthan>Pyuthan</option><option value=Rolpa>Rolpa</option><option value=Purbi>Purbi</option><option value=Rukum>Rukum</option><option value=Rupandehi>Rupandehi</option>'
            break;
        }
        case 6:{
            perDistrict.innerHTML='<option value="">District</option><option value=Dailekh>Dailekh</option><option value=Dolpa>Dolpa</option><option value=Humla>Humla</option><option value=Jajarkot>Jajarkot</option><option value=Jumla>Jumla</option><option value=Kalikot>Kalikot</option><option value=Mugu>Mugu</option><option value=Rukum>Rukum</option><option value=Salyan>Salyan</option><option value=Surkhet>Surkhet</option>'
            break;
        }
        case 7:{
            perDistrict.innerHTML='<option value="">District</option><option value=Dailekh>Dailekh</option><option value=Dolpa>Dolpa</option><option value=Humla>Humla</option><option value=Jajarkot>Jajarkot</option><option value=Jumla>Jumla</option><option value=Kalikot>Kalikot</option><option value=Mugu>Mugu</option><option value=Rukum>Rukum</option><option value=Salyan>Salyan</option><option value=Surkhet>Surkhet</option>'
            break;
        }
    }
})
let tempProvince = document.querySelector('#Temp-province');
let tempDistrict  =document.querySelector('#Temp-district');
tempProvince.addEventListener('change',(event)=>{
    let value= parseInt(event.target.value);
    switch(value){
        case  1:{
           tempDistrict.innerHTML ='<option value="">District</option><option value=Bhojpur>Bhojpur</option><option value=Dhankuta>Dhankuta</option><option value=Ilam>Ilam</option><option value=Jhapa>Jhapa</option><option value=Khotang>Khotang</option><option value=Morang>Morang</option><option value=Okhaldhunga>Okhaldhunga</option><option value=Panchthar>Panchthar</option><option value=Sankhuwasabha>Sankhuwasabha</option><option value=Solukhumbu>Solukhumbu</option><option value=Sunsari>Sunsari</option><option value=Taplejung>Taplejung</option><option value=Terhathum>Terhathum</option><option value=Udayapur>Udayapur</option>'
           break;
        }
        case 2:{
            tempDistrict.innerHTML='<option value="">District</option><option value=Bara>Bara</option><option value=Dhanusa>Dhanusa</option><option value=Mahottari>Mahottari</option><option value=Parsa>Parsa</option><option value=Rautahat>Rautahat</option><option value=Saptari>Saptari</option><option value=Sarlahi>Sarlahi</option><option value=Siraha>Siraha</option>'
            break;
        }
        case 3 :{
            tempDistrict.innerHTML= '<option value="">District</option><option value=Bhaktapur>Bhaktapur</option><option value=Chitwan>Chitwan</option><option value=Dhading>Dhading</option><option value=Dolakha>Dolakha</option><option value=Kathmandu>Kathmandu</option><option value=Kavrepalanchok>Kavrepalanchok</option><option value=Lalitpur>Lalitpur</option><option value=Makawanpur>Makawanpur</option><option value=Nuwakot>Nuwakot</option><option value=Ramechhap>Ramechhap</option><option value=Rasuwa>Rasuwa</option><option value=Sindhuli>Sindhuli</option><option value=Sindhupalchok>Sindhupalchok</option>'
            break;
        }
        case 4:{
            tempDistrict.innerHTML='<option value="">District</option><option value=Baglung>Baglung</option><option value=Gorkha>Gorkha</option><option value=Kaski>Kaski</option><option value=Lamjung>Lamjung</option><option value=Manang>Manang</option><option value=Mustang>Mustang</option><option value=Myagdi>Myagdi</option><option value=Nawalparasi>Nawalparasi</option><option value=Parbat>Parbat</option><option value=Syangja>Syangja</option><option value=Tanahu>Tanahu</option>'
            break;
        }
        case 5:{
            tempDistrict.innerHTML = '<option value="">District</option><option value=Arghakhanchi>Arghakhanchi</option><option value=Banke>Banke</option><option value=Bardiya>Bardiya</option><option value=Dang>Dang</option><option value=Gulmi>Gulmi</option><option value=Kapilvastu>Kapilvastu</option><option value=Nawalparasi>Nawalparasi</option><option value=Palpa>Palpa</option><option value=Pyuthan>Pyuthan</option><option value=Rolpa>Rolpa</option><option value=Purbi>Purbi</option><option value=Rukum>Rukum</option><option value=Rupandehi>Rupandehi</option>'
            break;
        }
        case 6:{
            tempDistrict.innerHTML='<option value="">District</option><option value=Dailekh>Dailekh</option><option value=Dolpa>Dolpa</option><option value=Humla>Humla</option><option value=Jajarkot>Jajarkot</option><option value=Jumla>Jumla</option><option value=Kalikot>Kalikot</option><option value=Mugu>Mugu</option><option value=Rukum>Rukum</option><option value=Salyan>Salyan</option><option value=Surkhet>Surkhet</option>'
            break;
        }
        case 7:{
            tempDistrict.innerHTML='<option value="">District</option><option value=Dailekh>Dailekh</option><option value=Dolpa>Dolpa</option><option value=Humla>Humla</option><option value=Jajarkot>Jajarkot</option><option value=Jumla>Jumla</option><option value=Kalikot>Kalikot</option><option value=Mugu>Mugu</option><option value=Rukum>Rukum</option><option value=Salyan>Salyan</option><option value=Surkhet>Surkhet</option>'
            break;
        }
    }
})

let photo = document.querySelector('#Photo');
let photoImg = document.querySelector('#Photo-img');
let photo1 = document.querySelector('#Photo1');
let photoImg1=document.querySelector('#Photo-img1');
let photo2 = document.querySelector('#Photo2');
let photoImg2 = document.querySelector('#Photo-img2');
photo.addEventListener('change',(event)=>{
    console.log("IS this event fired at  any place");
    photoImg.src = URL.createObjectURL(event.target.files[0]);
    console.log(URL.createObjectURL(event.target.files[0]));
    data.photo= event.target.files[0];
})
photo1.addEventListener('change',(event)=>{
    console.log("IS this event fired at  any place");
    photoImg1.src = URL.createObjectURL(event.target.files[0]);
    data.photo1= event.target.files[0];
})
photo2.addEventListener('change',(event)=>{
    console.log("IS this event fired at  any place");
    photoImg2.src = URL.createObjectURL(event.target.files[0]);
    data.photo2= event.target.files[0];
    console.log(data.photo2)
})

let readyTosend = false;
next.addEventListener('click',async (event)=>{
    if(formState == 3){
        next.innerHTML='<button type="button" class="btn btn-primary id="Submit">Submit</button>'
        let submit = next.children[0];
        console.log(submit.nodeName);
        submit.addEventListener('click',async (event)=>{
            data.citizen = document.querySelector('#citizen').checked
            data.minor = document.querySelector('#minor').checked;
            //first page
            data.name={}
            data.name.first=document.querySelector('#namefirst').value;
            data.name.middle = document.querySelector('#namemiddle').value;
            data.name.last = document.querySelector('#namelast').value
            data.gender = document.querySelector('#gender').value;
            data.nationality = document.querySelector('#nationality').value;
            data.dateOfBirth = document.querySelector('#dateOfBirth').value;
            data.fatherName = document.querySelector('#fatherName').value;
            data.motherName = document.querySelector('#motherName').value;
            data.grandfatherName = document.querySelector('#grandfatherName').value;
            data.spouceName = document.querySelector('#spouceName').value;
            data.occupation = document.querySelector('#occupation').value;
           
            //second page
            data.permanent={}
            data.permanent.province = document.querySelector('#Per-province').value;
            data.permanent.district = document.querySelector('#Per-district').value;
            data.permanent.ward = document.querySelector('#Per-ward').value;
            data.permanent.tole = document.querySelector('#Per-tole').value;
            data.temporary={}
            data.temporary.province = document.querySelector('#Temp-province').value;
            data.temporary.district = document.querySelector('#Temp-district').value;
            data.temporary.ward= document.querySelector('#Temp-ward').value;
            data.temporary.tole = document.querySelector('#Temp-tole').value;
            data.contact =[]
            data.contact[0]=document.querySelector('#contact1').value
            data.contact[1]= document.querySelector('#contact2').value
            data.email= document.querySelector("#email").value;
            if(data.name.first==''||data.name.last==''||data.gender==''||data.dateOfBirth==''||data.fatherName==''||data.motherName==''||data.occupation==''){
                next.innerHTML='<button type="button" class="btn btn-success" id="Submit">Next</button>'
                let page2hidden = document.querySelector('#page2hidden');
                page2hidden.style.display = 'block';
                while(formState > 0) {
                    formPage.style.animationName =`formAnimationR${formState-1}`
                    --formState;
                    formPage.style.transform=`translate(-${(formState)*25}%,0)`
                    formPage.addEventListener('animationend',(event)=>{
                        formPage.style.animationName='';
                        align?.children[0]?.children[formState+1]?.children[0]?.classList?.remove('text-primary')
                        align?.children[0]?.children[formState+1]?.children[0]?.classList?.add('text-secondary')
                        align?.children[0]?.children[formState]?.children[0]?.classList?.remove('text-secondary')
                        align?.children[0]?.children[formState]?.children[0]?.classList?.add('text-primary')
                    })
                }
            }
            else if(data.permanent.province==''||data.permanent.district==''||data.permanent.ward==''||data.permanent.tole==''||!checkContact(data.contact[0])){
                next.innerHTML='<button type="button" class="btn btn-success" id="Submit">Next</button>'
                let page3hidden = document.querySelector('#page2hidden');
                page3hidden.style.display = 'block';
                while(formState > 1) {
                    formPage.style.animationName =`formAnimationR${formState-1}`
                    --formState;
                    formPage.style.transform=`translate(-${(formState)*25}%,0)`
                    formPage.addEventListener('animationend',(event)=>{
                        formPage.style.animationName='';
                        align?.children[0]?.children[formState+1]?.children[0]?.classList?.remove('text-primary')
                        align?.children[0]?.children[formState+1]?.children[0]?.classList?.add('text-secondary')
                        align?.children[0]?.children[formState]?.children[0]?.classList?.remove('text-secondary')
                        align?.children[0]?.children[formState]?.children[0]?.classList?.add('text-primary')
                    })
                }
            }else{
                const getCookie = (name) => {
                    return document.cookie.split('; ').reduce((r, v) => {
                      const parts = v.split('=')
                      return parts[0] === name ? decodeURIComponent(parts[1]) : r
                    }, '')
                }
                const csrftoken = getCookie('csrftoken');
                const formData = new FormData();
                formData.append("is_citizen",data.citizen)
                formData.append("is_minor",data.minor)
                formData.append("first_name",data.name.first)
                formData.append("middle_name",data.name.middle)
                formData.append("last_name",data.name.last)
                formData.append("gender",data.gender)
                formData.append("nationality",data.nationality)
                formData.append("dob",data.dateOfBirth.replaceAll('-','/'))
                formData.append("fathers_name",data.fatherName)
                formData.append("motheres_name",data.motherName)
                formData.append("grandfathers_name",data.grandfatherName)
                formData.append("spouce_name",data.spouceName)
                formData.append("occupation",data.occupation)
                formData.append("province_p",data.permanent.province)
                formData.append("district_p",data.permanent.district)
                formData.append("ward_no_p",data.permanent.ward)
                formData.append("tole_p",data.permanent.tole)
                formData.append("province_t",data.temporary.province)
                formData.append("district_t",data.temporary.district)
                formData.append("ward_no_t",data.temporary.ward)
                formData.append("tole_t",data.temporary.tole)
                formData.append("contact_num1",data.contact[0])
                formData.append("contact_num2",data.contact[1])
                formData.append("email",data.email)
                formData.append("photo",data.photo)
                formData.append("citizen_front",data.photo1)
                formData.append("citizen_back",data.photo2)
                let status =await fetch(requestpath,{
                    method :'POST',
                    mode:'cors',
                    headers:{
                        "X-CSRFToken":csrftoken,
                    },
                    body:formData
                })
                if(status.status >= 200 && status.status < 300 ){
                    setTimeout(()=>{
                        window.location="https://lamapratik.ninja/wp/";
                    },2000)
                    let success_info = document.querySelector('#success_info');
                    success_info.style.color='green';
                    success_info.style.display='block';
                }
            }
            ///This is the portion we send the post request
           
        })
    }
})

previous.addEventListener('click',(event)=>{
    if(formState != 3){
        next.innerHTML='<button type="button" class="btn btn-success" id="Submit">Next</button>'
    }
})

