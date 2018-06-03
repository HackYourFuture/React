import React, { Component } from "react"; 

class CommentsBody extends Component {
    render() {
        const comments =
            <div>
                <div className="comment">
                    <strong>Fadi said :</strong><p>An axis dresses? Your mystic hashes the circuit past a singular fear. Why does a dispute bull a damage? An identifier mangles her lower sunrise near the thirst. A tight partner arrives.</p>
                </div>
                <div className="comment">
                    <strong>Mahmut said :</strong><p>Will the territory compose? A remedy rebuilds a prerequisite. The touch cables the curse behind the baroque garble. A plague prevails! Its interfering surplus imprisons a trigger above a self continuum. The shaped ploy reclaims a named nut.</p>
                </div>

            </div>

        return (
            <div className='comments'>
                {comments}
            </div>
        );
    }
}

export default CommentsBody;

