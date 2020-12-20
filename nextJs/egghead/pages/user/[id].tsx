import { SimpleGrid, Text, Alert } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = async (url: string) => {
    console.log(`Fetching from ${url}`);
    const response = await fetch(url);

    if(!response.ok) {
        throw Error("Yo! that's not ok !");
    }

    const data: {
        id: string;
    } = await response.json();

    return data
} 

const User = () => {
    const router = useRouter();
    const { id, ...rest } = router.query;

    if(!id) {
        return <div>Empty</div>;
    }

    const {data, error} = useSWR(`/api/user/${id}`, fetcher);

    if(error || data == undefined) {
        return <Alert status='error'>Loading Failed</Alert>
    }

    return (
        <div>
            <div>
                <h2>User Id: {id} </h2>
                <pre>{JSON.stringify(rest)}</pre>
            </div>
            <SimpleGrid columns={2} width="2xs" spacingY={4}>
                <Text fontWeight="bold" marginRight={4}>UserId</Text>
                <Text>{data.id}</Text>
                
                <Text fontWeight="bold" marginRight={4}>Name</Text>
                <Text>Nikhil</Text>

                <Text fontWeight="bold" marginRight={4}>Email</Text>
                <Text>nikhil@invalid.abc</Text>
            </SimpleGrid>
        </div>

    );
}

export default User;