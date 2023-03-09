import GuaranteeList from "../data/data";
import Gurantee from "./Gurantee";
export default function GuaranteeList(){

    return (
    <div>
        {guaranteeList.map((item) => { 
            const { id, item, img, description } = item;
           return (
           <Guarantee 
           key={id} 
           title={title} 
           img={img} 
           description={description} 
           />
        );
        })}
    </div>
    );
}