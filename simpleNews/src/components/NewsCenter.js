import React, {Component} from 'react';
import { Table} from 'antd';
class NewsCenter extends Component {

    render() {
        const columns = [
            {
                title: <span className="news-tit">新闻中心</span>,
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="#">{text}</a>
            }, {
                title: <a href="#">更多</a>,
                dataIndex: 'data',
                key: 'data',
                width: 100
            }
            
        ];
        const data = [
            {
                key: '1',
                name: '新闻标题1',
                data: '2017-07-04',
                
            }, {
                key: '2',
                name: '新闻标题2',
                data: '2017-07-04',
            }, {
                key: '3',
                name: '新闻标题3',
                data: '2017-07-04',
            },{
                key: '4',
                name: '新闻标题4',
                data: '2017-07-04',
            }
        ];
        return (
            <div className="news-center">
                <Table pagination={false} columns={columns} dataSource={data}/>
            </div>
        );
    }
}

export default NewsCenter;
