import { prisma } from '@/app/utils/prisma'

const Page = async ({ params }: { params: { id: string } }) => {
    const data = await prisma.product.findUnique(
        {
            where: { id: params.id }
        }
    );
    return (
        <div className="flex items-start justify-center py-12 bg-gray-100 px-4 lg:px-0">
            <div className="max-w-4xl w-full flex flex-col lg:flex-row bg-white shadow-xl rounded-lg overflow-hidden">
                {data?.imageURL && (
                    <div className="lg:w-1/3">
                        <img
                            src={data?.imageURL}
                            alt={data?.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
                <div className="p-6 flex flex-col justify-between lg:w-2/3">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{data?.name}</h1>
                        <h2 className="text-xl text-gray-700 mt-2">Price: ${data?.price}</h2>
                        <p className="mt-4 text-gray-600 text-base">{data?.description}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Page;
