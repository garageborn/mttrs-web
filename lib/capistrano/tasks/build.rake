namespace :build do
  desc 'Build client assets'
  task :client do
    on roles(:app) do
      execute(:node, 'production-build-client')
    end
  end

  desc 'Build server assets'
  task :server do
    on roles(:app) do
      execute(:node, 'production-build-server')
    end
  end

  desc 'Build server assets'
  task :all do
    invoke 'build:client'
    invoke 'build:server'
  end

  after 'deploy:updated', 'build:all'
end
