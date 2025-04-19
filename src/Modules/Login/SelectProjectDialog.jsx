import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

const SelectProjectDialog = ({ visible, projects, selectedProject, onProjectChange, onProceed, onClose }) => {

    return (
        <Dialog 
            header="Select a Project" 
            visible={visible} 
            style={{ width: '400px' }} 
            onHide={onClose}
            pt={{ mask: { className: '!bg-black/70' } }}
        >
            <div className="p-fluid">
                <div className="p-field my-2 flex flex-col gap-1">
                    <label htmlFor="projectDropdown" className="font-semibold">Project</label>
                    <Dropdown 
                        id="projectDropdown" 
                        value={selectedProject} 
                        options={projects} 
                        onChange={(e) => onProjectChange(e.value)} 
                        placeholder="Select a project"
                        optionLabel="name"
                    />
                </div>
                <div className="p-field mt-10 flex justify-center">
                    <Button 
                        label="Proceed" 
                        icon="pi pi-check" 
                        onClick={onProceed} 
                        className="p-button-primary max-w-40 min-w-40"
                    />
                </div>
            </div>
        </Dialog>
    );
};

export default SelectProjectDialog;