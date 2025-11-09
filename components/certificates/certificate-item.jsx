import React from "react";

function CertificateItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 transition-all bg-background hover:bg-surface-200">
            <div className='mr-2 text-surface-600 text-xs basis-1/4'>{props.date}</div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.subject}</a>
                {props.issuer && <div className='text-surface-600 mb-2'>{props.issuer}</div>}
                {props.description && <div className='text-surface-600'>{props.description}</div>}
            </div>
        </div>
    )
}

export default CertificateItem;
