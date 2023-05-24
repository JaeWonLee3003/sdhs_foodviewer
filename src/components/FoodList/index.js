import { Card, Center ,CardHeader, Heading ,Text} from "@chakra-ui/react";

function FoodList() {
    return (
        <Center
            h={"100vh"}
            justifyContent={"center"}>
            <Card
            size={"md"}
            border={"1px solid #E2E8F0"}
            w={"md"}
            textAlign={"center"}
            >
                
                <CardHeader>
                    <Heading>오늘의 급식</Heading>
                </CardHeader>
                <Text>현미밥, 옹심이국, 오리주물럭, 감자전&양파간장, 애호박새우살볶음, 배추김치</Text>
                </Card>
        </Center>
    );
}

export default FoodList;
