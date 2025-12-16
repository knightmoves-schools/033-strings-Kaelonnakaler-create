 let firstName = 'Hannah';
 let jobTitle = 'Teacher';
 let city = 'New York City';

let newJobPost = `Hello ${firstName},
We have recieved your application for the position of ${jobTitle} in ${city}.
We will be in touch soon. 
Sincerely,
HR manager`;
 
 

document.getElementById("result").innerHTML = newJobPost;



