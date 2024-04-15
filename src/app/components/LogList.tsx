import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fetchData() {
    return await prisma.logRecord.findMany();
}

export async function LogList() {
    const data = await fetchData();
    const days = new Set();

    return (
        <div className="flex flex-col gap-2">
            {data.map((el) => {
                const hasDay = days.has(el.timestamp.toLocaleDateString("ru"));
                if (!hasDay) {
                    days.add(el.timestamp.toLocaleDateString("ru"));
                }

                return (
                    <div key={el.id}>
                        {!hasDay ? (
                            <div className="mb-2 text-center text-sm">
                                {el.timestamp.toLocaleDateString("ru", {
                                    day: "numeric",
                                    month: "long",
                                })}
                            </div>
                        ) : null}
                        <div className="flex items-baseline gap-3">
                            <div className="text-xs text-gray-400">
                                {el.timestamp.toLocaleString("ru", {
                                    hour: "numeric",
                                    minute: "numeric",
                                })}
                            </div>
                            <div>{el.text}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
