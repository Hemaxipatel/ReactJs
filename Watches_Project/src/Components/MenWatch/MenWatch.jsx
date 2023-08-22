import React, { useEffect, useState } from 'react'
import Navibar from '../Navigationbar/Navibar'
import './MenWatch.css'
import SellerProduct from '../BestSeller/SellerProduct'
import AllWatchData from '../../Utils/AllWatchData.json'
import { Container } from 'react-bootstrap'


export default function MenWatch() {
    // let [menData, setMenData] = useState(AllWatchData)

    let [menWatchData, setMenWatchData] = useState([])
    let [searchText, setSearchText] = useState("")

    useEffect(() => {

        let filterData = AllWatchData.filter((e) => {
            return e.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setMenWatchData(filterData.filter((e) => e.gender === "MEN"))

    }, [searchText])
    return (
        <>
            <Navibar search={true} setSearchText={setSearchText} />

            <Container>
                <div className="mencard-flex d-flex flex-wrap gap-5">
                    {
                        menWatchData?.map?.((e) => {
                            return <SellerProduct data={e} />
                        })
                    }
                </div>
            </Container>
        </>
    )
}





