
import { getDatabase, ref, child, get, set ,  onValue} from "firebase/database";
import {database} from '../../firebase'

const Testing = () => {
function writeUserData(userId:any, name:any, email:any, imageUrl:any) {
  const db =database ; 
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
 
}
const db = database;
const starCountRef = ref(db, 'users/' );
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});


return(<div>Hello</div>)
 
}
export default Testing