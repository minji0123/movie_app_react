import React from 'react';


class Detail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined){ 
            history.push('/');
            // 버튼을 눌러서 이동하지 않고, 도메인을 입력해서 접근한 경우
            // 첫 화면으로 돌려보내기(데이터가 전달되지 않아서 접근을 막음)
        }
    }
    render(){
        const { location } = this.props;
        if (location.state){
        return <span>{ location.state.title }</span>;
            
        } else{
            return null;
        }
    }
}

export default Detail;