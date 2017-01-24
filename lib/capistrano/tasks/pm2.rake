namespace :pm2 do
  desc 'Restart app'
  task :reload do
    on roles(:app) do
      execute(:pm2, :reload, fetch(:pm2_file))
    end
  end

  desc 'List pm2 applications'
  task :status do
    on roles(:app) do
      execute(:pm2, :status, fetch(:pm2_file))
    end
  end

  desc 'Start pm2 application'
  task :start do
    on roles(:app) do
      execute(:pm2, :start, fetch(:pm2_file))
    end
  end

  desc 'Stop pm2 application'
  task :stop do
    on roles(:app) do
      execute(:pm2, :stop, fetch(:pm2_file))
    end
  end

  before 'deploy:finished', 'pm2:reload'
end

namespace :load do
  task :defaults do
    set :pm2_file, -> { "#{ release_path }/pm2.production.yml" }
  end
end
