# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
#
ENV['VAGRANT_DEFAULT_PROVIDER'] = 'libvirt'


Vagrant.configure("2") do |config|
	config.vm.define "cent-01" do |config|
		config.vm.hostname = "cent-01"
		config.vm.box = "centos/7"
		#config.vm.box_check_update = false
		config.vm.network "private_network", ip: "192.168.18.9"
		config.vm.network :forwarded_port, guest: 22, host: 22 
    config.vm.network :forwarded_port, guest: 8080, host: 3000
		config.vm.provider :libvirt do |domain|
			 domain.cpus = 2
			 domain.memory = 1024
		end
 	end

	config.vm.define "ubuntu-01" do |config|
		config.vm.hostname = "ubuntu-01"
		config.vm.box = "generic/ubuntu1804"
		config.vm.box_check_update = false
		config.vm.network "private_network", ip: "192.168.18.2"
		config.vm.network :forwarded_port, guest: 3000, host: 4000 
    config.vm.network :forwarded_port, guest: 8080, host: 3000
		config.vm.provider :libvirt do |domain|
			 domain.cpus = 2
			 domain.memory = 1024
    config.vm.synced_folder "src/", "/home/vagrant/folder_synced", type: "sshfs"

    config.vm.provision "shell", run: "aways", inline: <<-SHELL 
      echo "This is Ubuntu vm 2 (xenial64)"
			apt-get update
			apt-get install \
			apt-transport-https \
		        ca-certificates \
		        curl \
		        software-properties-common
			curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - 
			add-apt-repository \
   			"deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   			$(lsb_release -cs) \
   			stable"
			apt-get update
      apt-get install figlet
			apt-get install -y docker-ce 
      apt-get install mysql-server -y
			usermod -aG docker vagrant
		SHELL
    end
  end  # ending vm2 define
end

