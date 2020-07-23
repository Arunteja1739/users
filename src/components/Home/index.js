import  React,{useState} from 'react';
import moment from 'moment';
import styled from 'styled-components';
import data from '../../data/data.json';
import ModalViewer from '../../helpers/Hocs/ModalViewer';
import  UserModal from '../UserModal';


const UserCard = styled.div`
    width:300px;
    height:100px;
    padding:20px;
    background-color:#444dc9;
    border-radius:5px;
    margin:20px;
    transition: all 0.3s ease 0s;
    :hover{
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    }
    .fa { transform: scale(4,4); }
    .w-60{
        width:60px;
    }
    .h-60{
        height:60px;
    }
    .margin-r-20{
        margin-right:20px
    }
`;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
`;

const Home = ()=>{
    const [showModal,setShowModal] = useState(false);
    const [activeUser,setActiveUser] = useState({});
    const transformDateTime = (dateTime)=>{
        return new Date(moment(dateTime,'LLL'));
    }
    const transformActivityPeriods = (activeTimes)=>activeTimes.map((activeTime,id)=>({start:transformDateTime(activeTime.start_time),
            end:transformDateTime(activeTime.end_time),title:'active',id,color:'lightblue'}));

    const transformUser = (usr)=>({...usr,activity_periods:transformActivityPeriods(usr.activity_periods)});
    
    return (<div className="max-width-container frow margin-t-20">
        {
            data.members.map((member,id)=>(
                <UserCard className="pointer frow" key={id} onClick={()=>{
                    setActiveUser(member);
                    setShowModal(!showModal);
                }}>
                   <div className="center  w-60 h-60 margin-r-20" >
                        <i width="100%" height="100%" className="fa fa-user-circle " aria-hidden="true"></i>
                   </div>
                   <div className="fcol center align-items">
                        <div className="solid"> {member.real_name}</div>
                        <div className="solid">{member.tz}</div>
                   </div>
                </UserCard>
            ))
        }
        <>
        {showModal&&(
            <>
                <Overlay onClick = {()=>setShowModal(!showModal)} />
                <ModalViewer >
                    <UserModal user={transformUser(activeUser)}/>
                </ModalViewer>
            </>
        )}
        </>
    </div>)
};

export default Home;