import Product from '@/app/components/Product';
import { prisma } from '@/app/utils/prisma'

const Page = async ({ params }: { params: { id: string } }) => {
    const data = await prisma.product.findUnique(
        {
            where: { id: params.id }
        }
    );
    return (
        <div>
            {data?.imageURL && <img src={data?.imageURL} alt={data?.name} />}
            <h1>{data?.name}</h1>
            <h1>{data?.price}</h1>
            <h1>{data?.description}</h1>
        </div>
    );
}

export default Page;