let align = document.querySelector('.align');
let bttn = document.querySelector('button.navbar-toggler');
let state = 0;
document.addEventListener('DOMContentLoaded', (event) => {
    if (navigator.userAgentData.mobile) {
        align.style.display = "none";
    } else if (window.innerWidth < 576) {
        align.style.display = "none";
    }
})
window.addEventListener('resize', (event) => {
    if (window.innerWidth < 576) {
        align.style.animationName = "alignAnimation";
        align.addEventListener('animationend', () => {
            align.style.display = "none";
            align.animationName = "";
        })
    } else if (window.innerWidth > 576) {
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
            console.log(align.children[0].children[formState].children[0].classList)
            align.children[0].children[formState+1].children[0].classList.remove('text-primary')
            align.children[0].children[formState+1].children[0].classList.add('text-secondary')
            align.children[0].children[formState].children[0].classList.remove('text-secondary')
            align.children[0].children[formState].children[0].classList.add('text-primary')
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

let province = document.querySelector('#province');
let district  =document.querySelector('#district');
province.addEventListener('change',(event)=>{
    let value= parseInt(event.target.value);
    switch(value){
        case  1:{
            console.log(1);
           district.innerHTML ='<option>District</option><option value=Bhojpur>Bhojpur</option><option value=Dhankuta>Dhankuta</option><option value=Ilam>Ilam</option><option value=Jhapa>Jhapa</option><option value=Khotang>Khotang</option><option value=Morang>Morang</option><option value=Okhaldhunga>Okhaldhunga</option><option value=Panchthar>Panchthar</option><option value=Sankhuwasabha>Sankhuwasabha</option><option value=Solukhumbu>Solukhumbu</option><option value=Sunsari>Sunsari</option><option value=Taplejung>Taplejung</option><option value=Terhathum>Terhathum</option><option value=Udayapur>Udayapur</option>'
           break;
        }
        case 2:{
            console.log(2);
            district.innerHTML='<option>District</option><option value=Bara>Bara</option><option value=Dhanusa>Dhanusa</option><option value=Mahottari>Mahottari</option><option value=Parsa>Parsa</option><option value=Rautahat>Rautahat</option><option value=Saptari>Saptari</option><option value=Sarlahi>Sarlahi</option><option value=Siraha>Siraha</option>'
            break;
        }
        case 3 :{
            console.log(3);
            district.innerHTML= '<option>District</option><option value=Bhaktapur>Bhaktapur</option><option value=Chitwan>Chitwan</option><option value=Dhading>Dhading</option><option value=Dolakha>Dolakha</option><option value=Kathmandu>Kathmandu</option><option value=Kavrepalanchok>Kavrepalanchok</option><option value=Lalitpur>Lalitpur</option><option value=Makawanpur>Makawanpur</option><option value=Nuwakot>Nuwakot</option><option value=Ramechhap>Ramechhap</option><option value=Rasuwa>Rasuwa</option><option value=Sindhuli>Sindhuli</option><option value=Sindhupalchok>Sindhupalchok</option>'
            break;
        }
        case 4:{
            console.log(4);
            district.innerHTML='<option>District</option><option value=Baglung>Baglung</option><option value=Gorkha>Gorkha</option><option value=Kaski>Kaski</option><option value=Lamjung>Lamjung</option><option value=Manang>Manang</option><option value=Mustang>Mustang</option><option value=Myagdi>Myagdi</option><option value=Nawalparasi>Nawalparasi</option><option value=Parbat>Parbat</option><option value=Syangja>Syangja</option><option value=Tanahu>Tanahu</option>'
            break;
        }
        case 5:{
            console.log(5);
            district.innerHTML = '<option>District</option><option value=Arghakhanchi>Arghakhanchi</option><option value=Banke>Banke</option><option value=Bardiya>Bardiya</option><option value=Dang>Dang</option><option value=Gulmi>Gulmi</option><option value=Kapilvastu>Kapilvastu</option><option value=Nawalparasi>Nawalparasi</option><option value=Palpa>Palpa</option><option value=Pyuthan>Pyuthan</option><option value=Rolpa>Rolpa</option><option value=Purbi>Purbi</option><option value=Rukum>Rukum</option><option value=Rupandehi>Rupandehi</option>'
            break;
        }
        case 6:{
            console.log(6);
            district.innerHTML='<option>District</option><option value=Dailekh>Dailekh</option><option value=Dolpa>Dolpa</option><option value=Humla>Humla</option><option value=Jajarkot>Jajarkot</option><option value=Jumla>Jumla</option><option value=Kalikot>Kalikot</option><option value=Mugu>Mugu</option><option value=Rukum>Rukum</option><option value=Salyan>Salyan</option><option value=Surkhet>Surkhet</option>'
            break;
        }
        case 7:{
            console.log(7);
            district.innerHTML='<option>District</option><option value=Dailekh>Dailekh</option><option value=Dolpa>Dolpa</option><option value=Humla>Humla</option><option value=Jajarkot>Jajarkot</option><option value=Jumla>Jumla</option><option value=Kalikot>Kalikot</option><option value=Mugu>Mugu</option><option value=Rukum>Rukum</option><option value=Salyan>Salyan</option><option value=Surkhet>Surkhet</option>'
            break;
        }
    }
})

let photo = document.querySelector('#Photo');
let photoImg = document.querySelector('#Photo-img');
photo.addEventListener('change',(event)=>{
    console.log("IS this event fired at  any place");
    photoImg.src = URL.createObjectURL(event.target.files[0]);
})