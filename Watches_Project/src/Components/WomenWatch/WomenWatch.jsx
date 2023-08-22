import React, { useEffect, useState } from 'react'
import Navibar from '../Navigationbar/Navibar'
import FooterCom from '../FooterPage/FooterCom'
import AllWatchData from '../../Utils/AllWatchData.json'
import SellerProduct from '../BestSeller/SellerProduct'
import { Container } from 'react-bootstrap'

export default function WomenWatch() {
    // let [womenData, setWomenData] = useState(AllWatchData)

    let [womenWatchData, setWomenWatchData] = useState([])
    let [searchText, setSearchText] = useState("")

    useEffect(() => {
        let filterWomenData = AllWatchData.filter((e) => {
            return e.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setWomenWatchData(filterWomenData.filter((e) => e.gender === "WOMEN"))
    }, [searchText])
    return (
        <>
            <Navibar search={true} setSearchText={setSearchText} />
            <Container>
                <div className='d-flex flex-wrap gap-5 pt-5 pb-5'>
                    {
                        womenWatchData.map((e) => {
                            return <SellerProduct data={e} />
                        })
                    }
                </div>
            </Container>
            <FooterCom />
        </>
    )
}
