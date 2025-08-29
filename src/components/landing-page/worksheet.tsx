import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Work from "../../../public/landing-page/body/worker.png"

export default function WorkerSheet() {
    return (
        <div className="max-w-full w-full bg-neutral-100 lg:px-20 lg:pt-25 lg:pb-30 px-8 py-8">
            <div className="w-full flex flex-col lg:gap-20 gap-5">
                <div className="w-full flex flex-col gap-5">
                    <h2 className="font-sans font-medium lg:text-5xl text-2xl text-neutral-800 leading-[140%]">
                        The work we do, <br />
                        and the people we help
                    </h2>
                    <Button className="lg:hidden justify-center gap-[9px] ml-[-170px] ">
                        <p className="text-neutral-800 text-base font-medium">All Case Study</p>
                        <ArrowRight height={20} width={20} className="mt-[3px] text-neutral-800" />
                    </Button>
                </div>

                <div className="w-full justify-left flex lg:flex-row-reverse flex-col-reverse gap-15">
                    <div className="w-full justify-left lg:ml-[-250px] flex flex-col lg:justify-between gap-8">
                        <div className="flex flex-col lg:gap-8 gap-4">
                            <div className="flex flex-col gap-6">
                                <h4 className="text-neutral-800 lg:text-4xl text-xl font-sans font-medium text-left">/ HOUSEL</h4>
                                <p className="text-neutral-600 lg:text-3xl text-lg font-sans font-medium leading-[150%]">
                                    Help you to sell, buy, 
                                    mortgage,invest property, and  
                                    other real estate service.
                                </p>
                            </div>
                            <h4 className="text-neutral-500 lg:text-4xl font-sans font-medium text-left">/ CONTEXT AI</h4>
                            <h4 className="text-neutral-500 lg:text-4xl font-sans font-medium text-left">/ CLODY</h4>
                        </div>
                        <Button className="justify-center gap-[9px] lg:ml-[-250px] ml-[-170px]">
                            <p className="text-neutral-800 lg:text-xl text-base font-medium">All Case Study</p>
                            <ArrowRight height={20} width={20} className="mt-[3px] text-neutral-800" />
                        </Button>
                    </div>

                    <Image
                        src={Work}
                        alt="project"
                        className="lg:w-[55%] mr-[350px]"
                    />
                </div>
            </div>
        </div>
    )
}