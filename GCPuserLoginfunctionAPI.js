export default function usersignedin(profile) {
    const url = "https://us-central1-mlkaggle-288509.cloudfunctions.net/usersignedin"
    userdata = {
        "ID": profile.getId(),
        "Name": profile.getName(),
        "ImageURL": profile.getImageUrl(),
        "Email": profile.getEmail()
    };
     const otherparam={
        headers:{
           "content-type":"application/json",
        },
        body:JSON.stringify(userdata),
        method:"POST"
     };
    fetch(url,otherparam)
    .then(data=>{console.log(data)})
    .then(res=>{console.log(res);})
    .catch(error=>{console.log(error);})
  };
