import React from "react";
import { Activity } from "./Activity";
import { Gist } from "./Gist";
import { Repo } from "./Repo";
import './Tabs.css';

class Tree extends React.Component {
    state = {
        expanded: false
    };

    toggleExpanded = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    };

    renderItem = (item, key) => {
        return (
            <li key={key}>
                <span onClick={this.toggleExpanded.bind(this)}>
                    {item.title}
                </span>
                {
                    this.state.expanded && item.treeItems &&
                    <Tree treeItems={item.treeItems} />
                }
            </li>
        );
    };

    render() {
        const { treeItems, selectedIndex } = this.props;
        return (
            <div>
                <ul>
                    {/* {treeItems.map(this.renderItem)} */}
                    {selectedIndex===0 && treeItems.map((item, index) => {
                        return <Repo key={index} repo={item} />
                    })}
                    {selectedIndex===1 && treeItems.map((item, index) => {
                        return <Gist key={index} gist={item} />
                    })}
                    {selectedIndex===2 && treeItems.map((item, index) => {
                        return <Activity key={index} activity={item} />
                    })}
                </ul>
            </div>
        );
    }
}

class Tabs extends React.Component {
    state = {
        selectedIndex: 0
    };

    renderTab = selectedIndex => (item, key) => {
        return (
            <li
                className={`tabItem ${selectedIndex === key ? 'active' : ''}`}
                key={key}
                onClick={() => {
                    this.setState({
                        selectedIndex: key
                    });
                }}
            >
                {item.title}
            </li>
        );
    };

    render() {
        const { tabsItems } = this.props;
        const { selectedIndex } = this.state;

        return (
            <div className='Tabs'>
                <ul className='tabsList'>
                    {
                        tabsItems.map(this.renderTab(selectedIndex))
                    }
                </ul>
                <div className='tabPanel'>
                    {
                        tabsItems &&
                        tabsItems[selectedIndex].text
                    }
                    {                        
                        <Tree treeItems={tabsItems[selectedIndex].treeItems} selectedIndex={selectedIndex} />
                    }
                </div>
            </div>
        );
    }
};

export default Tabs;
