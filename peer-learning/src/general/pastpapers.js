import {Link} from "react-router-dom";
import React, { Component } from "react";

export default class PastPapers extends Component {
    render() {
        return (
            <form>
            <h3>Past Exam Paper Bank</h3>

            <div className="form-group">
            <p><b>Search</b></p>
            </div>

            <div className="form-group">
                <label>Module</label>
                <input type="text" className="form-control" placeholder="Enter the module you would like to search for" />
            </div>

            <div className="form-group">
                <label>Academic Year</label>
                <input type="text" className="form-control" placeholder="Enter the year would like to search for" />
            </div>

            <div className="form-group">
                <label>Sort By</label>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Highest to Lowest Rating</label>
                </div>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Lowest to Highest Rating</label>
                </div>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Newest to Oldest</label>
                </div>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Oldest to Newest</label>
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Click to find relevent results</button>

        </form>
        );
    }
}
