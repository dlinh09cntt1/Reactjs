import React, { Component } from 'react';
class Issues extends Component{
    constructor(props){
        super(props);
        this.state = {
            issues : []
        };
    }
    /* Get API */
    componentDidMount = () => {
       fetch('https://api.github.com/repos/facebook/react/issues?per_page=50')
                .then( resp => resp.json())
                .then(data => {
                    let issues = data.map((issue,index) => {
                            return(
                                <li key={index}>
                                    <img src={issue.user.avatar_url} />
                                    <div className="infomations">
                                        <span className="author">{issue.user.login}</span>
                                        <h3 className="title">{issue.title}</h3>
                                        <span className="times">Time: {issue.created_at}</span>
                                    </div>
                                </li>
                            )
                    })
                    this.setState({issues:issues});
                })
                .catch(function(err){
                    console.log(JSON.stringify(err));
                });
    }
/* end API */
    render(){
        return(
            <div className="project-item">
                <h2>List 50 issues Github</h2>
                <div className="get_github"><ul className="list_issue">{ this.state.issues }</ul></div>
            </div>
        );
    }
}
export default Issues;