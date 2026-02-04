'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Plus, Trash2, Edit, Save, X, Download } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  domain: string;
  description: string;
  features: string[];
  price?: string;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    name: '',
    domain: '',
    description: '',
    features: [''],
    price: '',
  });

  useEffect(() => {
    // Load projects from localStorage or mock data
    const savedProjects = localStorage.getItem('admin-projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const saveProjects = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
    localStorage.setItem('admin-projects', JSON.stringify(updatedProjects));
  };

  const handleAddProject = () => {
    if (!newProject.name || !newProject.domain || !newProject.description) {
      alert('Please fill in all required fields');
      return;
    }

    const project: Project = {
      id: `PRJ-${Date.now()}`,
      name: newProject.name,
      domain: newProject.domain,
      description: newProject.description,
      features: newProject.features?.filter(f => f.trim() !== '') || [],
      price: newProject.price || 'Contact for pricing',
    };

    saveProjects([...projects, project]);
    setNewProject({ name: '', domain: '', description: '', features: [''], price: '' });
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      saveProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleUpdateProject = (id: string, updates: Partial<Project>) => {
    saveProjects(projects.map(p => p.id === id ? { ...p, ...updates } : p));
    setEditingId(null);
  };

  const exportProjects = () => {
    const dataStr = JSON.stringify(projects, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `projects-${Date.now()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin - Manage Projects</h1>
            <p className="text-gray-600">Add, edit, or remove projects from the marketplace</p>
          </div>
          <Button onClick={exportProjects} className="gap-2">
            <Download size={20} />
            Export Projects
          </Button>
        </div>

        {/* Add New Project Form */}
        <Card className="p-6 mb-8 bg-white border-2 border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Project Name *</label>
              <Input
                value={newProject.name}
                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                placeholder="e.g., E-Commerce Platform"
                className="border-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Domain *</label>
              <Input
                value={newProject.domain}
                onChange={(e) => setNewProject({ ...newProject, domain: e.target.value })}
                placeholder="e.g., Web Development"
                className="border-2"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">Description *</label>
              <Textarea
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                placeholder="Describe the project..."
                rows={3}
                className="border-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Price (Optional)</label>
              <Input
                value={newProject.price}
                onChange={(e) => setNewProject({ ...newProject, price: e.target.value })}
                placeholder="e.g., $299 or Contact for pricing"
                className="border-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Features (comma-separated)</label>
              <Input
                value={newProject.features?.join(', ')}
                onChange={(e) => setNewProject({ ...newProject, features: e.target.value.split(',').map(f => f.trim()) })}
                placeholder="Feature 1, Feature 2, Feature 3"
                className="border-2"
              />
            </div>
          </div>
          <Button onClick={handleAddProject} className="mt-4 gap-2">
            <Plus size={20} />
            Add Project
          </Button>
        </Card>

        {/* Projects List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Current Projects ({projects.length})</h2>
          {projects.length === 0 ? (
            <Card className="p-12 text-center bg-white">
              <p className="text-gray-500 text-lg">No projects yet. Add your first project above.</p>
            </Card>
          ) : (
            projects.map((project) => (
              <Card key={project.id} className="p-6 bg-white border-2 border-gray-200 hover:border-primary transition-colors">
                {editingId === project.id ? (
                  <div className="space-y-4">
                    <Input
                      defaultValue={project.name}
                      onChange={(e) => handleUpdateProject(project.id, { name: e.target.value })}
                      className="font-bold text-xl border-2"
                    />
                    <Input
                      defaultValue={project.domain}
                      onChange={(e) => handleUpdateProject(project.id, { domain: e.target.value })}
                      className="border-2"
                    />
                    <Textarea
                      defaultValue={project.description}
                      onChange={(e) => handleUpdateProject(project.id, { description: e.target.value })}
                      rows={3}
                      className="border-2"
                    />
                    <div className="flex gap-2">
                      <Button onClick={() => setEditingId(null)} variant="outline" className="gap-2">
                        <X size={18} />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                          {project.domain}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      {project.features.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.features.map((feature, idx) => (
                            <span key={idx} className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="text-sm text-gray-500">ID: {project.id}</p>
                      {project.price && (
                        <p className="text-lg font-bold text-primary mt-2">{project.price}</p>
                      )}
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        onClick={() => setEditingId(project.id)}
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        <Edit size={16} />
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDeleteProject(project.id)}
                        variant="destructive"
                        size="sm"
                        className="gap-2"
                      >
                        <Trash2 size={16} />
                        Delete
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            ))
          )}
        </div>

        {/* Instructions */}
        <Card className="p-6 mt-8 bg-blue-50 border-2 border-blue-200">
          <h3 className="text-xl font-bold mb-3">📝 Instructions</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Projects are stored in browser localStorage</li>
            <li>• Use the "Export Projects" button to download a JSON backup</li>
            <li>• To make projects appear in marketplace, you'll need to integrate with the mock-data.ts file</li>
            <li>• Fields marked with * are required</li>
            <li>• You can edit or delete projects anytime</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
