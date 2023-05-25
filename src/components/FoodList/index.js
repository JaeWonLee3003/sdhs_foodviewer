import { Card, Center ,CardHeader, Heading ,Text, CardBody,Spinner} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getFood } from "../../api/getFood";

export function FoodList() {
const {data, isLoading,error,isSuccess} = useQuery(["food"],

()=>getFood(),{initialData:{"data":""}})

    return (
        <Center
            h={"100vh"}
            justifyContent={"center"}
            flexDirection={"column"}  
            maring
            >
            
            <Card
            size={"md"}
            border={"1px solid #E2E8F0"}
            w={"md"}
            textAlign={"center"}  
            >
                
                <CardHeader >
                    <Heading>오늘의 급식</Heading>
                </CardHeader>
                <CardBody>
                    {isLoading?
                    (<Spinner/>):(<Text>{data.data["food"]}</Text>)
                    }                    
                </CardBody>


                </Card>
                <form>

                <input type="text" className="review_info" name="review_info" placeholder="40자 내로 입력해주세요." ></input>
                <input type="submit" value={"입력"}></input>
                </form> 
        </Center>
    );
}

export default FoodList
